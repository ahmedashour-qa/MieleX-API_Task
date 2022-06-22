import * as POSTUser from '../requests/POST.User.request';
import * as DELETEUser from '../requests/DELETE.User.request'

let user;

describe('POST USER', () => {
  beforeEach(() => {
    cy.task("freshUser").then((object) => {
        user = object;
    });
  });

  it('Add a new user', () => {
    POSTUser.createUser(user).should((response) => {
      expect(response.status).to.eq(201)
      expect(response.statusText).to.eq('Created')
      expect(response.body.name).to.eq(user.name)
      expect(response.body.job).to.eq(user.job)
      expect(response.body.createdAt).not.be.null
      expect(response.body.id).not.be.null

      DELETEUser.deleteUser(response.body.id)
    });
  });

});