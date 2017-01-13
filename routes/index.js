var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
        res.render('index.html', {
        title : "Buy Build Fix"
        });
});

router.get('/indexsecond', function(req, res) {
        res.render('indexsecond.html', {
        title : "Buy Build Fix"
        });
});

router.get('/indexthree', function(req, res) {
        res.render('indexthree.html', {
        title : "Buy Build Fix"
        });
});

router.get('/buy', function(req, res) {
        res.render('buy.html', {
        title : "Buy"
        });
});

router.get('/build', function(req, res) {
        res.render('build.html', {
        title : "Build"
        });
});

router.get('/fix', function(req, res) {
        res.render('fix.html', {
        title : "Fix"
        });
});

router.get('/categories', function(req, res) {
        res.render('categories.html', {
        title : "Categories"
        });
});

router.get('/about', function(req, res) {
        res.render('about.html', {
        title : "About Us"
        });
});

router.get('/contact', function(req, res) {
        res.render('contact.html', {
        title : "Contact Us"
        });
});

router.get('/faq', function(req, res) {
        res.render('faq.html', {
        title : "Frequently Asked Questions"
        });
});

router.get('/financing', function(req, res) {
        res.render('financing.html', {
        title : "Financing"
        });
});

router.get('/realtor', function(req, res) {
        res.render('realtor.html', {
        title : "Realtor"
        });
});

/* GET fix categories. */
router.get('/appliances', function(req, res) {
        res.render('categories.html', {
        title : "Appliances",
        description : " description description description description description description description description description description description description description description description description  description description description description description description description description  description description description description description description description description  description description description description description description description description  description description description description description description description description  description description description description description description description description ",
        comp_one_name : "appliance company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.applianceone.com",
        comp_two_name : "appliance company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.appliancetwo.com",
        comp_three_name : "appliance company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.appliancethree.com"
        });
});

router.get('/blinds', function(req, res) {
        res.render('categories.html', {
        title : "Blinds",
        comp_one_name : "Blinds company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.blindseone.com",
        comp_two_name : "blinds company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.blindstwo.com",
        comp_three_name : "blinds company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.blindsthree.com"
        });
});

router.get('/cabinetry', function(req, res) {
        res.render('categories.html', {
        title : "Cabinetry",
        comp_one_name : "Cabinetry company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.cabinetryone.com",
        comp_two_name : "cabinetry company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.cabinetrytwo.com",
        comp_three_name : "cabinetry company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.cabinetrythree.com"
        });
});

router.get('/central_vac', function(req, res) {
        res.render('categories.html', {
        title : "Central Vac",
        comp_one_name : "central vac company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.centralvacone.com",
        comp_two_name : "central vac company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.centralvactwo.com",
        comp_three_name : "central vac company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.centralvacthree.com"
        });
});

router.get('/cleaners', function(req, res) {
        res.render('categories.html', {
        title : "Cleaners",
        comp_one_name : "cleaners company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.cleanersone.com",
        comp_two_name : "cleaners company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.cleanerstwo.com",
        comp_three_name : "cleaners company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.cleanersthree.com"
        });
});

router.get('/concrete', function(req, res) {
        res.render('categories.html', {
        title : "Concrete",
        comp_one_name : "concrete company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.concreteone.com",
        comp_two_name : "concrete company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.concretetwo.com",
        comp_three_name : "concrete company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.concretethree.com"
        });
});

router.get('/countertop', function(req, res) {
        res.render('categories.html', {
        title : "countertop",
        comp_one_name : "countertop company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.countertopone.com",
        comp_two_name : "countertop company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.countertoptwo.com",
        comp_three_name : "countertop company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.countertopthree.com"
        });
});

router.get('/deck', function(req, res) {
        res.render('categories.html', {
        title : "Deck",
        comp_one_name : "deck company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.decksone.com",
        comp_two_name : "deck company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.deckstwo.com",
        comp_three_name : "deck company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.decksthree.com"
        });
});

router.get('/dumpster', function(req, res) {
        res.render('categories.html', {
        title : "Dumpster",
        comp_one_name : "dumpster company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.dumpsterone.com",
        comp_two_name : "dumpster company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.dumpstertwo.com",
        comp_three_name : "dumpster company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.dumpsterthree.com"
        });
});

router.get('/electrical', function(req, res) {
        res.render('categories.html', {
        title : "Electrical",
        comp_one_name : "electrical company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.electricalone.com",
        comp_two_name : "electrical company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.electricaltwo.com",
        comp_three_name : "electrical company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.electricalthree.com"
        });
});

router.get('/excavation', function(req, res) {
        res.render('categories.html', {
        title : "Excavation",
        comp_one_name : "excavation company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.excavationone.com",
        comp_two_name : "excavation company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.excavationtwo.com",
        comp_three_name : "excavation company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.excavationthree.com"
        });
});

router.get('/fencing', function(req, res) {
        res.render('categories.html', {
        title : "Fencing",
        comp_one_name : "fencing company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.fencingone.com",
        comp_two_name : "fencing company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.fencingtwo.com",
        comp_three_name : "fencing company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.fencingthree.com"
        });
});

router.get('/finish', function(req, res) {
        res.render('categories.html', {
        title : "Finish",
        comp_one_name : "finish company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.finishone.com",
        comp_two_name : "finish company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.finishtwo.com",
        comp_three_name : "finish company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.finishthree.com"
        });
});

router.get('/fire_place', function(req, res) {
        res.render('categories.html', {
        title : "Fire Place",
        comp_one_name : "fire place company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.fireplaceone.com",
        comp_two_name : "fire place company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.fireplacetwo.com",
        comp_three_name : "fire place company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.fireplacethree.com"
        });
});

router.get('/flooring', function(req, res) {
        res.render('categories.html', {
        title : "Flooring",
        comp_one_name : "flooring company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.flooringone.com",
        comp_two_name : "flooring company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.flooringtwo.com",
        comp_three_name : "flooring company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.flooringthree.com"
        });
});

router.get('/foundation', function(req, res) {
        res.render('categories.html', {
        title : "Foundation",
        comp_one_name : "foundation company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.foundationone.com",
        comp_two_name : "foundation company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.foundationtwo.com",
        comp_three_name : "foundation company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.foundationthree.com"
        });
});

router.get('/framing', function(req, res) {
        res.render('categories.html', {
        title : "Framing",
        comp_one_name : "framing company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.framingone.com",
        comp_two_name : "framing company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.framingtwo.com",
        comp_three_name : "framing company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.framingthree.com"
        });
});

router.get('/furniture', function(req, res) {
        res.render('categories.html', {
        title : "Furniture",
        comp_one_name : "furniture company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.furnitureone.com",
        comp_two_name : "furniture company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.furnituretwo.com",
        comp_three_name : "furniture company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.furniturethree.com"
        });
});

router.get('/garage_door', function(req, res) {
        res.render('categories.html', {
        title : "Garage Door",
        comp_one_name : "garage door company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.garagedoorone.com",
        comp_two_name : "garage door company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.garagedoortwo.com",
        comp_three_name : "garage door company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.garagedoorthree.com"
        });
});

router.get('/general', function(req, res) {
        res.render('categories.html', {
        title : "General",
        comp_one_name : "general company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.generalone.com",
        comp_two_name : "general company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.generaltwo.com",
        comp_three_name : "general company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.generalthree.com"
        });
});

router.get('/granite', function(req, res) {
        res.render('categories.html', {
        title : "Granite",
        comp_one_name : "granite company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.graniteone.com",
        comp_two_name : "granite company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.granitetwo.com",
        comp_three_name : "granite company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.granitethree.com"
        });
});

router.get('/gutters', function(req, res) {
        res.render('categories.html', {
        title : "Gutters",
        comp_one_name : "gutters company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.guttersone.com",
        comp_two_name : "gutters company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.gutterstwo.com",
        comp_three_name : "gutters company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.guttersthree.com"
        });
});

router.get('/hvac', function(req, res) {
        res.render('categories.html', {
        title : "HVAC",
        comp_one_name : "hvac company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.hvacone.com",
        comp_two_name : "hvac company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.hvactwo.com",
        comp_three_name : "hvac company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.hvacthree.com"
        });
});

router.get('/insurance', function(req, res) {
        res.render('categories.html', {
        title : "Insurance",
        comp_one_name : "insurance company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.insuranceone.com",
        comp_two_name : "insurance company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.insurancetwo.com",
        comp_three_name : "insurance company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.insurancethree.com"
        });
});

router.get('/interior', function(req, res) {
        res.render('categories.html', {
        title : "Interior",
        comp_one_name : "interior company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.interiorone.com",
        comp_two_name : "interior company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.interiortwo.com",
        comp_three_name : "interior company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.interiorthree.com"
        });
});

router.get('/landscaping', function(req, res) {
        res.render('categories.html', {
        title : "Landscaping",
        comp_one_name : "landscaping company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.landscapingone.com",
        comp_two_name : "landscaping company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.landscapingtwo.com",
        comp_three_name : "landscaping company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.landscapingthree.com"
        });
});

router.get('/lender', function(req, res) {
        res.render('categories.html', {
        title : "Lender",
        comp_one_name : "lender company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.lenderone.com",
        comp_two_name : "lender company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.lendertwo.com",
        comp_three_name : "lender company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.lenderthree.com"
        });
});

router.get('/lighting', function(req, res) {
        res.render('categories.html', {
        title : "Lighting",
        comp_one_name : "lighting company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.lightingone.com",
        comp_two_name : "lighting company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.lightingtwo.com",
        comp_three_name : "lighting company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.lightingthree.com"
        });
});

router.get('/locations', function(req, res) {
        res.render('categories.html', {
        title : "Locations",
        comp_one_name : "locations company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.locationsone.com",
        comp_two_name : "locations company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.locationstwo.com",
        comp_three_name : "locations company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.locationsthree.com"
        });
});

router.get('/media', function(req, res) {
        res.render('categories.html', {
        title : "Media",
        comp_one_name : "media company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.mediaone.com",
        comp_two_name : "media company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.mediatwo.com",
        comp_three_name : "media company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.mediathree.com"
        });
});

router.get('/mirrors', function(req, res) {
        res.render('categories.html', {
        title : "Mirrors",
        comp_one_name : "mirrors company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.mirrorsone.com",
        comp_two_name : "mirrors company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.mirrorstwo.com",
        comp_three_name : "mirrors company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.mirrorsthree.com"
        });
});

router.get('/moving', function(req, res) {
        res.render('categories.html', {
        title : "Moving",
        comp_one_name : "moving company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.movingone.com",
        comp_two_name : "moving company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.movingtwo.com",
        comp_three_name : "moving company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.movingthree.com"
        });
});

router.get('/painting', function(req, res) {
        res.render('categories.html', {
        title : "Painting",
        comp_one_name : "painting company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.paintingone.com",
        comp_two_name : "painting company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.paintingtwo.com",
        comp_three_name : "painting company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.paintingthree.com"
        });
});

router.get('/plans', function(req, res) {
        res.render('categories.html', {
        title : "Plans",
        comp_one_name : "plans company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.plansone.com",
        comp_two_name : "plans company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.planstwo.com",
        comp_three_name : "plans company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.plansthree.com"
        });
});

router.get('/plumbing', function(req, res) {
        res.render('categories.html', {
        title : "Plumbing",
        comp_one_name : "plumbing company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.plumbingone.com",
        comp_two_name : "plumbing company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.plumbingtwo.com",
        comp_three_name : "plumbing company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.plumbingthree.com"
        });
});

router.get('/plumiers', function(req, res) {
        res.render('categories.html', {
        title : "Plumiers",
        comp_one_name : "plumiers company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.plumiersone.com",
        comp_two_name : "plumiers company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.plumierstwo.com",
        comp_three_name : "plumiers company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.plumiersthree.com"
        });
});

router.get('/pools', function(req, res) {
        res.render('categories.html', {
        title : "Pools",
        comp_one_name : "pools company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.poolsone.com",
        comp_two_name : "pools company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.poolstwo.com",
        comp_three_name : "pools company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.poolsthree.com"
        });
});

router.get('/port_o_potty', function(req, res) {
        res.render('categories.html', {
        title : "Port O Potty",
        comp_one_name : "port o potty company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.portopottyone.com",
        comp_two_name : "port o potty company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.portopottytwo.com",
        comp_three_name : "port o potty company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.portopottythree.com"
        });
});

router.get('/railing', function(req, res) {
        res.render('categories.html', {
        title : "Railing",
        comp_one_name : "railing company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.railingone.com",
        comp_two_name : "railing company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.railingtwo.com",
        comp_three_name : "railing company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.railingthree.com"
        });
});

router.get('/realtor', function(req, res) {
        res.render('categories.html', {
        title : "Realtor",
        comp_one_name : "realtor company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.realtorone.com",
        comp_two_name : "realtor company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.realtortwo.com",
        comp_three_name : "realtor company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.realtorthree.com"
        });
});

router.get('/roofing', function(req, res) {
        res.render('categories.html', {
        title : "Roofing",
        comp_one_name : "roofing company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.roofingone.com",
        comp_two_name : "roofing company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.roofingtwo.com",
        comp_three_name : "roofing company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.roofingthree.com"
        });
});

router.get('/security', function(req, res) {
        res.render('categories.html', {
        title : "Security",
        comp_one_name : "security company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.securityone.com",
        comp_two_name : "security company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.securitytwo.com",
        comp_three_name : "security company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.securitythree.com"
        });
});

router.get('/siding', function(req, res) {
        res.render('categories.html', {
        title : "Siding",
        comp_one_name : "siding company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.sidingone.com",
        comp_two_name : "siding company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.sidingtwo.com",
        comp_three_name : "siding company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.sidingthree.com"
        });
});

router.get('/storage', function(req, res) {
        res.render('categories.html', {
        title : "Storage",
        comp_one_name : "storage company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.storageone.com",
        comp_two_name : "storage company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.storagetwo.com",
        comp_three_name : "storage company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.storagethree.com"
        });
});

router.get('/stucco', function(req, res) {
        res.render('categories.html', {
        title : "Stucco",
        comp_one_name : "stucco company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.stuccoone.com",
        comp_two_name : "stucco company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.stuccotwo.com",
        comp_three_name : "stucco company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.stuccothree.com"
        });
});

router.get('/suppliers', function(req, res) {
        res.render('categories.html', {
        title : "Suppliers",
        comp_one_name : "suppliers company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.suppliersone.com",
        comp_two_name : "suppliers company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.supplierstwo.com",
        comp_three_name : "suppliers company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.suppliersthree.com"
        });
});

router.get('/tar', function(req, res) {
        res.render('categories.html', {
        title : "Tar",
        comp_one_name : "tar company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.tarone.com",
        comp_two_name : "tar company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.tartwo.com",
        comp_three_name : "tar company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.tarthree.com"
        });
});

router.get('/title', function(req, res) {
        res.render('categories.html', {
        title : "Title",
        comp_one_name : "title company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.titleone.com",
        comp_two_name : "title company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.titletwo.com",
        comp_three_name : "title company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.titlethree.com"
        });
});

router.get('/window_doors', function(req, res) {
        res.render('categories.html', {
        title : "Window Doors",
        comp_one_name : "window_doors company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.window_doorsone.com",
        comp_two_name : "window_doors company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.window_doorstwo.com",
        comp_three_name : "window_doors company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.window_doorsthree.com"
        });
});

router.get('/yardcare', function(req, res) {
        res.render('categories.html', {
        title : "Yardcare",
        comp_one_name : "yardcare company one",
        comp_one_address : "123 road drive",
        comp_one_phone : "111-222-3333",
        comp_one_website : "www.yardcareone.com",
        comp_two_name : "yardcare company two",
        comp_two_address : "123 road drive",
        comp_two_phone : "111-222-3333",
        comp_two_website : "www.yardcaretwo.com",
        comp_three_name : "yardcare company three",
        comp_three_address : "123 road drive",
        comp_three_phone : "111-222-3333",
        comp_three_website : "www.yardcarethree.com"
        });
});
module.exports = router;
