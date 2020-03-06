function IdentityHandler(common) {
    this.common = common || {};
}


"", "MPID", "Email", "Other", "Other2", "Other3", "Other4"
function identified(mParticleUser, identityApiRequest) {
    var mPUser = mParticleUser.getUserIdentities().userIdentities;
    switch (this.common.settings.userIdentificationType) {
      case ('CustomerId'):
        var userId = mPUser.customerid;
        break;
      case ('MPID'):
        var userId = mParticleUser.getMPID();
        break;
      case ('Email'):
        var userId = mPUser.email;
        break;
      case ('Other'):
        var userId = mPUser.other;
        break;
      case ('Other2'):
        var userId = mPUser.other2;
        break;
      case ('Other3'):
        var userId = mPUser.other3;
        break;
      case ('Other4'):
        var userId = mPUser.other4;
        break;
      default:
        var userId = mPUser.customerid;
        break;
    }

    if (typeof userId !== 'undefined') {
        branch.setIdentity(userId);
    }
}

function logout(mParticleUser, identityApiRequest) {
    branch.logout();
}

function setUserIdentity(forwarderSettings, id, type) {
    if (type === 1) { branch.setIdentity(id); }
}

IdentityHandler.prototype.onUserIdentified = identified;
// IdentityHandler.prototype.onIdentifyComplete = identified;
// IdentityHandler.prototype.onLoginComplete = identified;
// IdentityHandler.prototype.onModifyComplete = identified;
IdentityHandler.prototype.onLogoutComplete = logout;
IdentityHandler.prototype.onSetUserIdentity =  setUserIdentity;

module.exports = IdentityHandler;
