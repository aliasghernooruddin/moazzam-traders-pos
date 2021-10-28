var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlAdmin = require('../controllers/admin');
var ctrlStructure = require('../controllers/structure');
var ctrlSupplier = require('../controllers/supplier');
var ctrlCustomer = require('../controllers/customer');
var ctrlCategory = require('../controllers/category');
var ctrlWarehouse = require('../controllers/warehouse');
var ctrlItem = require('../controllers/item');
var ctrlOrder = require('../controllers/order');

// profile routes
router.get('/profile', auth, ctrlProfile.profileRead);

// user routes
router.post('/register-user', ctrlAuth.register);
router.post('/login-user', ctrlAuth.login);
router.get('/get-users', ctrlAuth.users)

//admin routes
router.get('/admin-login', ctrlAdmin.login)

// structure routes
router.post('/add-structure', ctrlStructure.add);
router.get('/get-structure', ctrlStructure.get);
router.get('/get-structure-dropdown', ctrlStructure.getDropdown)

// supplier routes
router.post('/supplier', ctrlSupplier.addSupplier);
router.get('/supplier/:id', ctrlSupplier.getSupplier);
router.delete('/supplier/:id', ctrlSupplier.deleteSupplier);
router.get('/suppliers', ctrlSupplier.getSuppliers);
router.get('/suppliers/dropdown', ctrlSupplier.getSuppliersDropdown)
router.patch('/supplier', ctrlSupplier.updateSupplier)

// customer routes
router.post('/customer', ctrlCustomer.addCustomer);
router.get('/customer/:id', ctrlCustomer.getCustomer);
router.delete('/customer/:id', ctrlCustomer.deleteCustomer);
router.get('/customers', ctrlCustomer.getCustomers);
router.get('/customers/dropdown', ctrlCustomer.getCustomersDropdown)
router.patch('/customer', ctrlCustomer.updateCustomer)

// category routes
router.post('/category', ctrlCategory.addCategory);
router.get('/categories', ctrlCategory.getCategories);
router.get('/category/:id', ctrlCategory.getCategoryById);
router.post('/categories/parent', ctrlCategory.getCategoriesByParent);
router.delete('/category/:id', ctrlCategory.deleteCategory);
router.get('/categories/dropdown', ctrlCategory.getCategoriesDropdown)
router.patch('/category', ctrlCategory.updateCategory)

// warehouse routes
router.post('/warehouse', ctrlWarehouse.addWarehouse);
router.get('/warehouse/:id', ctrlWarehouse.getWarehouse);
router.delete('/warehouse/:id', ctrlWarehouse.deleteWarehouse);
router.get('/warehouses', ctrlWarehouse.getWarehouses);
router.get('/warehouses/dropdown', ctrlWarehouse.getWarehousesDropdown)
router.patch('/warehouse', ctrlWarehouse.updateWarehouse)

// warehouse-types routes
router.post('/warehouse-type', ctrlWarehouse.addWarehouseType);
router.get('/warehouse-types/dropdown', ctrlWarehouse.getWarehouseTypesDropdown)

// item routes
router.post('/item', ctrlItem.addItem);
router.get('/item/:id', ctrlItem.getItem);
router.delete('/item/:id', ctrlItem.deleteItem);
router.get('/items', ctrlItem.getItems);
router.get('/items/dropdown', ctrlItem.getItemsDropdown)
router.patch('/item', ctrlItem.updateItem)

// order routes
router.post('/order', ctrlOrder.addOrder);
router.get('/order/:id', ctrlOrder.getOrder);
router.delete('/order/:id', ctrlOrder.deleteOrder);
router.get('/orders', ctrlOrder.getOrders);
router.patch('/order', ctrlOrder.updateOrder)
router.get('/order/deliver/:id', ctrlOrder.deliverOrder)

module.exports = router;
