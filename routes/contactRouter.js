const express = require("express");
const router = express.Router();
const { getContact, 
    getContactById,
    createContact,
    updateContactByID,
    deleteContactByID 
}  = require("../controllers/contactController")

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get(getContactById);

router.route("/:id").put(updateContactByID);

router.route("/id").delete(deleteContactByID);

module.exports = router;