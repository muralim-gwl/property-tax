import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Grid, Row, Col, Table} from 'react-bootstrap';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {brown500, red500,white} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DataTable from '../common/Table';

const $ = require('jquery');
$.DataTable = require('datatables.net');
const dt = require('datatables.net-bs');


const buttons = require('datatables.net-buttons-bs');

require('datatables.net-buttons/js/buttons.colVis.js'); // Column visibility
require('datatables.net-buttons/js/buttons.html5.js'); // HTML 5 file export
require('datatables.net-buttons/js/buttons.flash.js'); // Flash file export
require('datatables.net-buttons/js/buttons.print.js'); // Print view button

var flag = 0;
const styles = {
  errorStyle: {
    color: red500
  },
  underlineStyle: {
    borderColor: brown500
  },
  underlineFocusStyle: {
    borderColor: brown500
  },
  floatingLabelStyle: {
    color: brown500
  },
  floatingLabelFocusStyle: {
    color: brown500
  }
};

class PropertyTaxSearch extends Component {
  constructor(props) {
       super(props);
       this.search=this.search.bind(this);
   }

  componentWillMount()
  {
    //call boundary service fetch wards,location,zone data
  }

  componentDidMount()
  {
    let {initForm} = this.props;
    initForm();


  }

  componentWillUnmount(){
     $('#propertyTaxTable')
     .DataTable()
     .destroy(true);
  }



  search(e)
  {
      let {showTable}=this.props;
      e.preventDefault();
      console.log("Show Table");
      flag=1;
      showTable(true);
  }

  componentWillUpdate() {
    if(flag == 1) {
      flag = 0;
      $('#propertyTaxTable').dataTable().fnDestroy();
    }
  }

  componentDidUpdate(prevProps, prevState) {
      if (true) {
          $('#propertyTaxTable').DataTable({
            dom: 'Bfrtip',
            buttons: [
                     'copy', 'csv', 'excel', 'pdf', 'print'
             ],
             ordering: false,
             bDestroy: true
          });
      }
  }

  render() {
    let {
      propertyTaxSearch,
      fieldErrors,
      isFormValid,
      isTableShow,
      handleChange,
      handleChangeNextOne,
      handleChangeNextTwo
    } = this.props;
    let {search} = this;
    console.log(propertyTaxSearch);
    console.log(isTableShow);
    const viewTabel=()=>
    {
      return (
        <Card>
          <CardHeader title={< strong style = {{color:brown500}} > Result < /strong>}/>
          <CardText>
        <Table id="propertyTaxTable" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </CardText>
      </Card>
      )
    }
    return (
      <div className="PropertyTaxSearch">
        <form onSubmit={(e) => {
          search(e)
        }}>
          <Card>
            <CardHeader title={< strong style = {{color:brown500}} > Search Property < /strong>}/>

            <CardText>
              <Card>
                <CardText>
                  <Grid>
                    <Row>
                      <Col xs={12} md={6}>
                        <TextField errorText={fieldErrors.doorNo
                          ? fieldErrors.doorNo
                          : ""} value={propertyTaxSearch.doorNo?propertyTaxSearch.doorNo:""} onChange={(e) => handleChange(e, "doorNo", true, /^\d{10}$/g)} hintText="eg:-3233312323" floatingLabelText="Door number" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}/>
                      </Col>

                      <Col xs={12} md={6}>
                        <TextField errorText={fieldErrors.assessmentNo
                          ? fieldErrors.assessmentNo
                          : ""} value={propertyTaxSearch.assessmentNo?propertyTaxSearch.assessmentNo:""} onChange={(e) => handleChange(e, "assessmentNo", false, /^\d{15}$/g)} hintText="eg:-123456789123456" floatingLabelText="Assessment number" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}/>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} md={6}>
                        <TextField errorText={fieldErrors.mobileNo
                          ? fieldErrors.mobileNo
                          : ""} value={propertyTaxSearch.mobileNo?propertyTaxSearch.mobileNo:""} onChange={(e) => handleChange(e, "mobileNo", false, /^\d{10}$/g)} hintText="Mobile number" floatingLabelText="Mobile number" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}/>
                      </Col>

                      <Col xs={12} md={6}>
                        <TextField errorText={fieldErrors.aadharNo
                          ? fieldErrors.aadharNo
                          : ""} value={propertyTaxSearch.aadharNo?propertyTaxSearch.aadharNo:""} onChange={(e) => handleChange(e, "aadharNo", false, /^\d{12}$/g)} hintText="Aadhar number " floatingLabelText="Aadhar number " floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}/>
                      </Col>
                    </Row>
                  </Grid>

                </CardText>
              </Card>

              <Card>
                <CardHeader title={< strong style = {{color:brown500}} > Advance Search < /strong>} actAsExpander={true} showExpandableButton={true}/>

                <CardText expandable={true}>
                  <Grid>
                    <Row>
                      <Col xs={12} md={6}>
                        <TextField errorText={fieldErrors.ownerName
                          ? fieldErrors.ownerName
                          : ""} value={propertyTaxSearch.ownerName?propertyTaxSearch.ownerName:""} onChange={(e) => handleChange(e, "ownerName", false, "")} hintText="Owner Name" floatingLabelText="Owner Name" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}/>
                      </Col>

                      <Col xs={12} md={6}>
                        <TextField errorText={fieldErrors.oldAssessmentNo
                          ? fieldErrors.oldAssessmentNo
                          : ""} value={propertyTaxSearch.oldAssessmentNo?propertyTaxSearch.oldAssessmentNo:""} onChange={(e) => handleChange(e, "oldAssessmentNo", false, /^\d{15}$/g)} hintText="Old Assessment Number" floatingLabelText="Old Assessment Number" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}/>
                      </Col>
                    </Row>

                    <Row>

                      <Card>
                        <CardHeader title={< strong style = {{color:brown500}} > Boundary < /strong>}/>

                        <CardText>
                          <Grid>
                            <Row>
                              <Col xs={12} md={6}>

                                <SelectField errorText={fieldErrors.zone
                                  ? fieldErrors.zone
                                  : ""} value={propertyTaxSearch.zone?propertyTaxSearch.zone:""} onChange={(event, index, value) => {
                                    var e = {
                                      target: {
                                        value: value
                                      }
                                    };
                                    handleChange(e, "zone", false, "")}} floatingLabelText="Zone	Drop " floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}>
                                  <MenuItem value={1} primaryText="Never"/>
                                  <MenuItem value={2} primaryText="Every Night"/>
                                  <MenuItem value={3} primaryText="Weeknights"/>
                                  <MenuItem value={4} primaryText="Weekends"/>
                                  <MenuItem value={5} primaryText="Weekly"/>
                                </SelectField>

                              </Col>

                              <Col xs={12} md={6}>
                                <SelectField errorText={fieldErrors.ward
                                  ? fieldErrors.ward
                                  : ""} value={propertyTaxSearch.ward?propertyTaxSearch.ward:""} onChange={(event, index, value) =>{
                                    var e = {
                                      target: {
                                        value: value
                                      }
                                    };
                                    handleChange(e, "ward", false, "")}
                                  } floatingLabelText="Ward" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}>
                                  <MenuItem value={1} primaryText="Never"/>
                                  <MenuItem value={2} primaryText="Every Night"/>
                                  <MenuItem value={3} primaryText="Weeknights"/>
                                  <MenuItem value={4} primaryText="Weekends"/>
                                  <MenuItem value={5} primaryText="Weekly"/>
                                </SelectField>
                              </Col>
                            </Row>

                            <Row>
                              <Col xs={12} md={6}>
                                <SelectField errorText={fieldErrors.location
                                  ? fieldErrors.location
                                  : ""} value={propertyTaxSearch.location?propertyTaxSearch.location:""} onChange={(event, index, value) => {
                                    var e = {
                                      target: {
                                        value: value
                                      }
                                    };
                                    handleChange(e, "location", false, "")}} floatingLabelText="Location" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}>
                                  <MenuItem value={1} primaryText="Never"/>
                                  <MenuItem value={2} primaryText="Every Night"/>
                                  <MenuItem value={3} primaryText="Weeknights"/>
                                  <MenuItem value={4} primaryText="Weekends"/>
                                  <MenuItem value={5} primaryText="Weekly"/>
                                </SelectField>
                              </Col>

                            </Row>
                          </Grid>

                        </CardText>
                      </Card>

                    </Row>

                    <Row>
                      <Card>
                        <CardHeader title={< strong style = {{color:brown500}} > Search Property by Demand < /strong>}/>
                        <CardText>
                          <Grid>
                            <Row>
                              <Col xs={12} md={6}>

                                <DatePicker errorText={fieldErrors.demandFrom
                                  ? fieldErrors.demandFrom
                                  : ""} defaultDate={propertyTaxSearch.demandFrom
                                  ? new Date(propertyTaxSearch.demandFrom)
                                  : new Date()} onChange={(nothing, date) => {
                                  var e = {
                                    target: {
                                      value: date
                                    }
                                  };
                                  handleChange(e, "demandFrom", false, "")
                                }} floatingLabelText="Demand From" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}/>

                              </Col>

                              <Col xs={12} md={6}>
                                <DatePicker errorText={fieldErrors.demandTo
                                  ? fieldErrors.demandTo
                                  : ""} defaultDate={propertyTaxSearch.demandTo
                                  ? new Date(propertyTaxSearch.demandTo)
                                  : new Date()} onChange={(nothing, date) => {
                                  var e = {
                                    target: {
                                      value: date
                                    }
                                  };
                                  handleChange(e, "demandTo", false, "")
                                }} floatingLabelText="Demand To" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle}/>

                              </Col>
                            </Row>
                          </Grid>
                        </CardText>
                      </Card>
                    </Row>

                  </Grid>
                </CardText>
              </Card>
              <div style={{
                float: "center"
              }}>
                <RaisedButton type="submit" disabled={!isFormValid} label="Search" backgroundColor={brown500} labelColor={white}/>
                <RaisedButton label="Close"/>
              </div>
            </CardText>
          </Card>


                  {isTableShow?viewTabel():""}



        </form>

      </div>
    );
  }
}

const mapStateToProps = state => ({propertyTaxSearch: state.form.form, fieldErrors: state.form.fieldErrors, isFormValid: state.form.isFormValid,isTableShow:state.form.showTable});

const mapDispatchToProps = dispatch => ({
  initForm: () => {
    dispatch({
      type: "RESET_STATE",
      validationData: {
        required: {
          current: [],
          required: ["doorNo"]
        },
        pattern: {
          current: [],
          required: ["assessmentNo", "oldAssessmentNo", "mobileNo", "aadharNo", "doorNo"]
        }
      }
    });
  },
  handleChange: (e, property, isRequired, pattern) => {
    dispatch({type: "HANDLE_CHANGE", property, value: e.target.value, isRequired, pattern});
  },
  handleChangeNextOne: (e, property, propertyOne, isRequired, pattern) => {
    dispatch({
      type: "HANDLE_CHANGE_NEXT_ONE",
      property,
      propertyOne,
      value: e.target.value,
      isRequired,
      pattern
    })
  },
  handleChangeNextTwo: (e, property, propertyOne, propertyTwo, isRequired, pattern) => {
    dispatch({
      type: "HANDLE_CHANGE_NEXT_ONE",
      property,
      propertyOne,
      propertyTwo,
      value: e.target.value,
      isRequired,
      pattern
    })
  },
  showTable:(state)=>
  {
    dispatch({type:"SHOW_TABLE",state});
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyTaxSearch);
