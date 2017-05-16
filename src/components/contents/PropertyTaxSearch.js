import React, { Component } from 'react';
import { Grid,Row,Col,Table } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {brown500,red500} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
// import DataTable from './DataTable';
const $ = require('jquery');
const dt = require('datatables.net-bs');
const buttons = require('datatables.net-buttons-bs');

require('datatables.net-buttons/js/buttons.colVis.js'); // Column visibility
require('datatables.net-buttons/js/buttons.html5.js'); // HTML 5 file export
require('datatables.net-buttons/js/buttons.flash.js'); // Flash file export
require('datatables.net-buttons/js/buttons.print.js'); // Print view button

var flag = 0;
const styles = {
  errorStyle: {
    color: red500,
  },
  underlineStyle: {
    borderColor: brown500,
  },
  underlineFocusStyle: {
    borderColor: brown500,
  },
  floatingLabelStyle: {
    color: brown500,
  },
  floatingLabelFocusStyle: {
    color: brown500,
  },
};

class PropertyTaxSearch extends Component {
  constructor(props) {
       super(props);
   }

  

  componentWillMount()
  {
    //call boundary service fetch wards,location,zone data

  }

  componentWillUpdate() {
    if(flag == 1) {
      flag = 0;
      $('#propertyTaxTable').dataTable().fnDestroy();
    }
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.agreements.length != this.state.agreements.length) {
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
    return (
      <div className="PropertyTaxSearch">
          <Card>
                <CardHeader
                  title={<strong style={{color:brown500}}>Search Property</strong>}
                />

                <CardText>
                <Card>
                      <CardText>
                        <Grid>
                            <Row>
                              <Col xs={12} md={6}>
                              <TextField
                                 hintText="Door number"
                                 floatingLabelText="Door number"
                                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                 underlineStyle={styles.underlineStyle}
                                 underlineFocusStyle={styles.underlineFocusStyle}
                              />
                              </Col>

                              <Col xs={12} md={6}>
                              <TextField
                                 hintText="Assessment number"
                                 floatingLabelText="Assessment number"
                                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                 underlineStyle={styles.underlineStyle}
                                 underlineFocusStyle={styles.underlineFocusStyle}
                              />
                              </Col>
                            </Row>

                            <Row>
                              <Col xs={12} md={6}>
                              <TextField
                                 hintText="Mobile number"
                                 floatingLabelText="Mobile number"
                                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                 underlineStyle={styles.underlineStyle}
                                 underlineFocusStyle={styles.underlineFocusStyle}
                              />
                              </Col>

                              <Col xs={12} md={6}>
                              <TextField
                                 hintText="Aadhar number "
                                 floatingLabelText="Aadhar number "
                                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                 underlineStyle={styles.underlineStyle}
                                 underlineFocusStyle={styles.underlineFocusStyle}
                              />
                              </Col>
                            </Row>
                        </Grid>


                      </CardText>
                </Card>

                <Card>
                    <CardHeader
                      title={<strong style={{color:brown500}}>Advance Search</strong>}
                      actAsExpander={true}
                      showExpandableButton={true}
                    />

                    <CardText expandable={true}>
                       <Grid>
                          <Row>
                            <Col xs={12} md={6}>
                              <TextField
                                 hintText="Owner Name"
                                 floatingLabelText="Owner Name"
                                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                 underlineStyle={styles.underlineStyle}
                                 underlineFocusStyle={styles.underlineFocusStyle}
                              />
                            </Col>

                            <Col xs={12} md={6}>
                              <TextField
                                 hintText="Old Assessment Number"
                                 floatingLabelText="Old Assessment Number"
                                 floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                 underlineStyle={styles.underlineStyle}
                               underlineFocusStyle={styles.underlineFocusStyle}
                            />
                          </Col>
                        </Row>

                        <Row>

                            <Card>
                                <CardHeader
                                    title={<strong style={{color:brown500}}>Boundary</strong>}
                                />

                                <CardText>
                                <Grid>
                                   <Row>
                                     <Col xs={12} md={6}>

                                      <SelectField
                                           floatingLabelText="Zone	Drop "
                                           floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                           underlineStyle={styles.underlineStyle}
                                           underlineFocusStyle={styles.underlineFocusStyle}
                                           >
                                           <MenuItem value={1} primaryText="Never" />
                                           <MenuItem value={2} primaryText="Every Night" />
                                           <MenuItem value={3} primaryText="Weeknights" />
                                           <MenuItem value={4} primaryText="Weekends" />
                                           <MenuItem value={5} primaryText="Weekly" />
                                         </SelectField>

                                     </Col>

                                     <Col xs={12} md={6}>
                                     <SelectField
                                          floatingLabelText="Ward"
                                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                          underlineStyle={styles.underlineStyle}
                                          underlineFocusStyle={styles.underlineFocusStyle}
                                          >
                                          <MenuItem value={1} primaryText="Never" />
                                          <MenuItem value={2} primaryText="Every Night" />
                                          <MenuItem value={3} primaryText="Weeknights" />
                                          <MenuItem value={4} primaryText="Weekends" />
                                          <MenuItem value={5} primaryText="Weekly" />
                                        </SelectField>
                                   </Col>
                                 </Row>

                                     <Row>
                                       <Col xs={12} md={6}>
                                        <SelectField
                                            floatingLabelText="Location"
                                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                            underlineStyle={styles.underlineStyle}
                                            underlineFocusStyle={styles.underlineFocusStyle}
                                            >
                                            <MenuItem value={1} primaryText="Never" />
                                            <MenuItem value={2} primaryText="Every Night" />
                                            <MenuItem value={3} primaryText="Weeknights" />
                                            <MenuItem value={4} primaryText="Weekends" />
                                            <MenuItem value={5} primaryText="Weekly" />
                                          </SelectField>
                                       </Col>


                                   </Row>
                                </Grid>

                                </CardText>
                            </Card>



                        </Row>

                        <Row>
                            <Col xs={12} md={6}>

                              <DatePicker
                                hintText="Demand From"
                                floatingLabelText="Demand From"
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                underlineStyle={styles.underlineStyle}
                                underlineFocusStyle={styles.underlineFocusStyle}
                              />



                            </Col>

                            <Col xs={12} md={6}>
                              <DatePicker
                                hintText="Demand To"
                                floatingLabelText="Demand To"
                                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                underlineStyle={styles.underlineStyle}
                                underlineFocusStyle={styles.underlineFocusStyle}
                              />

                            </Col>
                        </Row>





                       </Grid>
                    </CardText>
                  </Card>
                      <div style={{float:"center"}}>
                          <RaisedButton label="Search" backgroundColor={brown500} />
                          <RaisedButton label="Close" />
                      </div>
                </CardText>
          </Card>

          <Card>
              <CardHeader
                title="Result"/>
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


        {/*<DataTable/>*/}
      </div>
    );
  }
}

export default PropertyTaxSearch;


// <Grid>
//     <Row className="show-grid">
//      <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
//      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
//     </Row>
//
//     <Row className="show-grid">
//      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
//      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
//      <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
//     </Row>
//
//     <Row className="show-grid">
//      <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
//     </Row>
//
//     <Row className="show-grid">
//      <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
//      <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
//     </Row>
//     </Grid>
