import React, {Component} from 'react'; 

class Envelope extends Component { 
    constructor(props) 
    { 
        super(props);
        this.createEnvelope = this.createEnvelope.bind(this); 
    } 
  	
  	// create a new envelope object that we will manage the signature request through
	createEnvelope(user, user_name, user_email) {
		var uuid = require('uuid');

		var envDef = new docusign.EnvelopeDefinition();
		envDef.emailSubject = 'Please sign this petition to save the forests!';
		envDef.templateId = '12345678910';

		// create a template role with a valid templateId and roleName and assign signer info
		var tRole = new docusign.TemplateRole();
		tRole.roleName = user;
		tRole.name = user_name;
		tRole.email = user_email;

		// create a list of template roles and add our newly created role
		var templateRolesList = [];
		templateRolesList.push(tRole);

		// assign template role(s) to the envelope
		envDef.templateRoles = templateRolesList;

		// send the envelope by setting |status| to 'sent'. To save as a draft set to 'created'
		envDef.status = 'sent';

		// use the |accountId| we retrieved through the Login API to create the Envelope
		var accountId = accountId;

		// instantiate a new EnvelopesApi object
		var envelopesApi = new docusign.EnvelopesApi();

		// call the createEnvelope() API
		envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef}, function (err, envelopeSummary, response) {
		  if (err) {
		    return next(err);
		  }
		  this.setState({sentEnvelope: true})
		  console.log('EnvelopeSummary: ' + JSON.stringify(envelopeSummary));
		  return JSON.stringify(envelopeSummary);
		});
	}
}   



