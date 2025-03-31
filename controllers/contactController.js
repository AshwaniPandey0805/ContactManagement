//@dec Get all contacts
//@router GET /api/contact
//@access public
const getContact = (req, res) => {
    res.status(200).json({
        message : "Get all contact"
    });
}

//@dec create contact
//@router GET /api/contact
//@access public

const createContact = (req, res) => {
    res.status(200).json({
        message : "create contact"
    });
}

//@dec Get contact by ID
//@router GET /api/contact
//@access public

const getContactById = (req, res) => {
    res.status(200).json({
        message : `Get contact details for ${req.params.id}`
    });
}

//@dec update contact by ID
//@router GET /api/contact
//@access public

const updateContactByID = (req, res) => {
    res.status(200).json({
        message : `Update contact details for ${req.params.id}`
    });
}

//@dec delete contact by ID
//@router GET /api/contact
//@access public

const deleteContactByID = (req, res) => {
    res.status(200).json({
        message : `Delete contact details for this ${req.params.id}`
    });
}

module.exports = { 
    getContact, 
    getContactById,
    createContact,
    updateContactByID,
    deleteContactByID 
}