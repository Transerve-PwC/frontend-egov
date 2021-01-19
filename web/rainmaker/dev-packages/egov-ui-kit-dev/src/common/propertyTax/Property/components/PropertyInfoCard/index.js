import React, { Component } from "react";
import { Card } from "components";
import Label from "egov-ui-kit/utils/translationNode";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { getQueryArg } from "egov-ui-framework/ui-utils/commons";
import OldValueLabelContainer from "../../../../../common/common/OldValueLabelContainer";
import "./index.css";
import { httpRequest } from "egov-ui-kit/utils/api";
import { MDMS } from "egov-ui-kit/utils/endPoints";

class PropertyInfoCard extends Component {

    state = {}

    componentDidMount() {
      !!this.props.map && !!this.props.tenantId && this.getMapDetails()
    }

    componentDidUpdate(prevProps) {
      if(this.props.tenantId !== prevProps.tenantId && !!this.props.map) {
        this.getMapDetails()
      }
    }

    getMapDetails = async () => {
      const requestBody = {
        MdmsCriteria: {
          tenantId: this.props.tenantId,
          moduleDetails: [
            {
              moduleName: "boundary-location",
              masterDetails: [{name: "mapDetails"}]
            }
          ]
        }
      }
      try {
        const payload = await httpRequest(MDMS.GET.URL, MDMS.GET.ACTION, [], requestBody);
        const data = payload.MdmsRes["boundary-location"] || {};
        let {mapDetails = []} = data;
        this.setState({
          mapDetails: mapDetails[0]
        })
      } catch (error) {
        console.log("=====error", error)
      }
    }

  render() {
    const { ownerInfo, header, editIcon, backgroundColor = "rgb(242, 242, 242)", items = [], subSection = [], hideSubsectionLabel = false, map = false, geoLocation } = this.props;
    let position = [0, 0];
    let showError = false
    const isModify = getQueryArg(window.location.href, "mode") == 'WORKFLOWEDIT';
    if(!!map && !!this.state.mapDetails) {
      showError = !geoLocation.latitude && !geoLocation.longitude
      position = !!geoLocation.latitude || !!geoLocation.longitude ? [geoLocation.latitude, geoLocation.longitude] : [this.state.mapDetails.nagarNigamLat, this.state.mapDetails.nagarNigamLng]
    }
    return (
      <div>
        {items && (
          <Card
            style={{ backgroundColor, boxShadow: "none" }}
            className={ownerInfo ? 'pt-info-card-style' : ""}
            textChildren={
              <div>
                <div >
                {!ownerInfo && <div className="rainmaker-displayInline" style={{ alignItems: "center", marginLeft: "13px",marginTop:20 }}>
                    {header && (
                      <Label
                        labelStyle={{ letterSpacing: "0.67px", color: "rgba(0, 0, 0, 0.87)", fontWeight: "400", lineHeight: "19px" }}
                        label={header}
                        fontSize="18px"
                      />
                    )}
                    {{ editIcon } && <span style={{ position: "absolute", right: "25px" }}>{editIcon}</span>}
                  </div>}
                  
                  {items.map((item) => {
                    if(item){
                      return (
                        <div>
                          <div className="col-sm-3 col-xs-12" style={{ marginBottom: 10, marginTop: 5 }}>
                            <div className="col-sm-12 col-xs-12" style={{ padding: "5px 0px 0px 0px" }}>
                              <Label
                                labelStyle={{ letterSpacing: "0.67px", color: "rgba(0, 0, 0, 0.54)", fontWeight: "400", lineHeight: "1.375em" }}
                                label={item.key ? item.key : "NA"}
                                fontSize="12px"
                              />
                            </div>
                            <div className="col-sm-12 col-xs-12" style={{ padding: "5px 0px 0px 0px" }}>
                              <Label
                                labelStyle={{ letterSpacing: "0.67px", color: "rgba(0, 0, 0, 0.87)", fontWeight: "400", lineHeight: "19px" }}
                                label={item.value ? item.value : "NA"}
                                fontSize="16px"
                              />
                            </div>
                            {isModify && <div className="col-sm-12 col-xs-12" style={{ padding: "5px 0px 0px 0px" }}>
                              <OldValueLabelContainer value={item.value} jsonPath={item.jsonPath} oldValue={item.oldValue} />
                            </div>}
                          </div>
                        </div>
                      );
                    }
                  })}
                  {!!map && !!this.state.mapDetails && (
                    <div className="col-sm-3 col-xs-12">
                      {!!showError && (<div style={{color: "red"}}>
                      Location not Found
                      </div>)}
                    <Map className="col-sm-12 col-xs-12 map-container" center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                      // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url={this.state.mapDetails.mapurl}
                    />
                    <Marker position={position}>
                      {/* <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup> */}
                    </Marker>
                  </Map>
                  </div>
                  )}
                </div>
                {subSection && (
                  <div>
                    {subSection.map((units, unitIndex) => {
                      return (
                        <div className="col-sm-12 col-xs-12" style={{ alignItems: "center" }}>
                          {!hideSubsectionLabel && (
                            <Label
                              labelStyle={{
                                letterSpacing: "0.67px",
                                marginTop: 15,
                                color: "rgba(0, 0, 0, 0.87)",
                                fontWeight: "400",
                                lineHeight: "19px",
                              }}
                              label={"PROPERTYTAX_FLOOR_" + unitIndex}
                              fontSize="18px"
                            />
                          )}
                          {units.map((unit, index) => {
                            const subUnitHeader = hideSubsectionLabel ? undefined : "Unit - " + (index + 1);
                            return <PropertyInfoCard backgroundColor="white" items={unit} header={subUnitHeader}></PropertyInfoCard>;
                          })}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            }
          />
        )}
      </div>
    );
  }
}

export default PropertyInfoCard;
