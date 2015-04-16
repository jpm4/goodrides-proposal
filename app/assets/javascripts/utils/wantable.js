Goodrides.Mixins.Wantable = {
  want: function () {
    if (!this._want) {
      this._want = new Goodrides.Models.Want;
    }
    return this._want;
  },

  createWant: function () {
    this.want().save({}, {
      success: function () {
        this.updateWantCount(1);
      }.bind(this)
    });
  },

  destroyWant: function () {
    this.want().destroy({
      success: function (model) {
        model.unset("id");
        this.updateWantCount(-1);
      }.bind(this)
    });
  },

  toggleWant: function () {
    if (this.want().isNew()) {
      this.createWant();
    } else {
      this.destroyWant();
    }
  },

  updateWantCount: function (delta) {
    this.set("num_wants", this.get("num_wants") + delta);
  },

  parseWant: function (payload) {
    var attrs = {};
    attrs[this.wantableOptions.foreignKey] = payload.id;
    this.want().set(attrs);

    if (payload.want) {
      this.want().set(payload.want);
      delete payload.want;
    }
  }
};
