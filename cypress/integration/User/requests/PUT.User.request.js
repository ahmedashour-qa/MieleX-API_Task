/// <reference types="cypress" />

// const payloadUpdateUser = require('../payloads/update-user.json');

function updateUser(Userid,obj) {
  // cy.request - client http
  return cy.request({
    method: 'PUT',
    url: `/users/${Userid}`,
    failOnStatusCode: false,
    body: obj
  });
};

export { updateUser };