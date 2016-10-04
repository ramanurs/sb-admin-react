import React, { Component } from 'react';
// import classNames from 'classnames';
// import Button from 'react-bootstrap/lib/Button';
// import Panel from 'react-bootstrap/lib/Panel';
// // import Pagination from 'react-bootstrap/lib/Pagination';
// import PageHeader from 'react-bootstrap/lib/PageHeader';
import { Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader } from 'react-bootstrap';
import CustomPanel  from './panel';

class PanelWells extends Component {

  render() {
    return (
      <div>
        <div className="col-lg-12">
          <PageHeader>Panels and Wells</PageHeader>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <CustomPanel
              style="default"
              headerText="Default Panel"
              footerText="Panel Footer"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
              lectus et, fringilla augue."
            />
          </div>
          <div className="col-lg-4">
            <CustomPanel
              style="panel-primary"
              headerText="Primary Panel"
              footerText="Panel Footer"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
              lectus et, fringilla augue."
            />
          </div>
          <div className="col-lg-4">
            <CustomPanel
              style="panel-success"
              headerText="Success Panel"
              footerText="Panel Footer"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
              lectus et, fringilla augue."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <CustomPanel
              style="panel-info"
              headerText="Info Panel"
              footerText="Panel Footer"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
              lectus et, fringilla augue."
            />
          </div>
          <div className="col-lg-4">
            <CustomPanel
              style="panel-warning"
              headerText="Warning Panel"
              footerText="Panel Footer"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
              lectus et, fringilla augue."
            />
          </div>
          <div className="col-lg-4">
            <CustomPanel
              style="panel-danger"
              headerText="danger Panel"
              footerText="Panel Footer"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
              lectus et, fringilla augue."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <CustomPanel
              style="panel-green"
              headerText="Green Panel"
              footerText="Panel Footer"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
              lectus et, fringilla augue."
            />
          </div>
          <div className="col-lg-4">
            <CustomPanel
              style="panel-red"
              headerText="Red Panel"
              footerText="Panel Footer"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
              lectus et, fringilla augue."
            />
          </div>
          <div className="col-lg-4">
            <CustomPanel
              style="panel-yellow"
              headerText="Yellow Panel"
              footerText="Panel Footer"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere
              lectus et, fringilla augue."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Panel header={<span>Collapsible Accordion Panel Group</span>} >
              <Accordion>
                <Panel
                  header={
                    <h4 className="panel-title">
                        Collapsible Group Item #1
                    </h4>
                  } eventKey={1}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                   fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                   culpa qui officia deserunt mollit anim id est laborum.
                </Panel>
                <Panel
                  header={
                    <h4 className="panel-title">
                        Collapsible Group Item #2
                    </h4>
                  } eventKey="2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                   fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                   culpa qui officia deserunt mollit anim id est laborum.
                </Panel>
                <Panel
                  header={
                    <h4 className="panel-title">
                        Collapsible Group Item #3
                    </h4>
                  } eventKey="3"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                   fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                   culpa qui officia deserunt mollit anim id est laborum.
                </Panel>
              </Accordion>
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <Panel header={<span>Basic Tabs</span>} >
              <Tabs id="tabs1" defaultActiveKey={1}>
                <Tab eventKey={1} title="Home">
                  <h4>Home Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Tab>
                <Tab eventKey={2} title="Profile">
                  <h4>Profile Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Tab>
                <Tab eventKey={3} title="Messages">
                  <h4>Messages Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
                <Tab eventKey={4} title="Settings">
                  <h4>Settings Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
              </Tabs>
            </Panel>
          </div>

          <div className="col-lg-6">
            <Panel header={<span>Pill Tabs</span>} >
              <Tabs id="tabs2" bsStyle="pills" defaultActiveKey={1}>
                <Tab eventKey={1} title="Home">
                  <h4>Home Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
                <Tab eventKey={2} title="Profile">
                  <h4>Profile Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
                <Tab eventKey={3} title="Messages">
                  <h4>Messages Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
                <Tab eventKey={4} title="Settings">
                  <h4>Settings Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
              </Tabs>
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <Well>
              <h4>Normal Well</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
            </Well>
          </div>
          <div className="col-lg-4">
            <Well bsSize="large">
              <h4>Large Well</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
            </Well>
          </div>
          <div className="col-lg-4">
            <Well bsSize="small">
              <h4>Small Well</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
            </Well>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Jumbotron>
              <h1>Jumbotron</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et,
                fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.
              </p>
              <p><Button bsStyle="primary" bsSize="large">Learn more</Button></p>
            </Jumbotron>
          </div>
        </div>

      </div>

    );
  }
}

export default PanelWells;
