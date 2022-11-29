/**
 * Abstract controller class to inherit from if you need to modify the CRUD functions
 */
class ControllerClass {
  static ModelClass = undefined;
  static create() {
    return (req, res) => {
      const model = new this.ModelClass(req.body);
      this.ModelClass.create(model, (err, data) => {
        if (err) res.status(500).send(err);
        else res.send(data);
      });
    };
  }

  static findByID() {
    return (req, res) => {
      this.ModelClass.findByID(req.params.id, (err, data) => {
        if (err) res.status(500).send(err);
        else res.send(data);
      });
    };
  }

  static getAll() {
    return (req, res) => {
      this.ModelClass.getAll((err, data) => {
        if (err) res.status(500).send(err);
        else res.send(data);
      });
    };
  }

  static deleteItem() {
    return (req, res) => {
      this.ModelClass.delete(req.params.id, (err, data) => {
        if (err) res.status(500).send(err);
        else res.send(data);
      });
    };
  }

  static update() {
    return (req, res) => {
      const model = new this.ModelClass(req.body);
      this.ModelClass.update(req.params.id, model, (err, data) => {
        if (err) res.status(500).send(err);
        else res.send(data);
      });
    };
  }
}

// Default controller functions

function create(ModelClass) {
  return (req, res) => {
    const model = new ModelClass(req.body);
    ModelClass.create(model, (err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
  };
}

function findByID(ModelClass) {
  return (req, res) => {
    ModelClass.findByID(req.params.id, (err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
  };
}

function getAll(ModelClass) {
  return (req, res) => {
    console.log(ModelClass);
    ModelClass.getAll((err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
  };
}

function deleteItem(ModelClass) {
  return (req, res) => {
    ModelClass.delete(req.params.id, (err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
  };
}

function update(ModelClass) {
  return (req, res) => {
    const model = new ModelClass(req.body);
    ModelClass.update(req.params.id, model, (err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
  };
}

module.exports = {
  create,
  findByID,
  getAll,
  deleteItem,
  update,
  ControllerClass,
};
