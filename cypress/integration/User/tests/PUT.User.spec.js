import * as POSTUser from '../requests/POST.User.request';
import * as PUTUser from '../requests/PUT.User.request'
import * as DELETEUser from '../requests/DELETE.User.request'
import * as UpdatePayload from '../payloads/update-user.json'

let user;

describe('PUT USER', () => {
  beforeEach(() => {
    cy.task("freshUser").then((object) => {
        user = object;
    });
  });

  it('Update an existing user', () => {
    POSTUser.createUser(user).should((response) => {
      
      PUTUser.updateUser(response.body.id,UpdatePayload).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq(UpdatePayload.name)
        expect(response.body.job).to.eq(UpdatePayload.job)
        expect(response.body.updatedAt).not.be.null

      })
      
      DELETEUser.deleteUser(response.body.id)
    });
  });

});