/// <reference types="cypress" />

function Userdata(Userid) {
  // cy.request - client http
  return cy.request({
    method: 'GET',
    url: `/users/${Userid}`,
    failOnStatusCode: false
  });
};

export { Userdata };