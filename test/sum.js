var sum = require("../sum")
var expect = require("chai").expect
//var should = require("chai").should
//var should = require("should")
var chaiHttp = require("chai-http")
var chai = require("chai")
var assert = require("assert")
chai.use(chaiHttp)
var adminUrl = "http://localhost:3000/Teacher"

describe("POST Data", function() {
    it("It should post data", (done) => {
        let teacher = {
            name: "yuvi",
            email: "yuvi@gmail.com",
            adress: "dadar",
            salary: "25000"
        }

        chai.request(adminUrl)
            .post("/")
            .send(teacher)
            .end(function(err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                console.log("POST Result", res.body)
                done()
            })
    })
})

describe("GET Data", () => {
    it("It should get all teachers record", (done) => {
        chai.request(adminUrl)
            .get("/")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.be.an("array")
                console.log("GET Result", res.body)
                done()
            })
    })
})

describe("GET BY ID", () => {
    it("It should get single teachers record", (done) => {
        let id = "5d809b4b99108e31e02f8a83"

        chai.request(adminUrl)
            .get("/" + id + "")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res.body).to.be.an("object")
                console.log("GET By ID Result", res.body)
                done()
            })
    })
})
describe("PUT BY ID", () => {
    it("It should update teachers record by ID", (done) => {
        let id = "5d80c62940a2505682ccb6bc"

        chai.request(adminUrl)
            .put("/" + id + "")
            .send({ email: "abc@gmail.com" })
            .end((err, res) => {
                done()
            })
    })
})

describe("DELETE BY ID", () => {
    it("It should delete teachers record by ID", (done) => {
        let id = "5d81b02221c8ac422726be5e"

        chai.request(adminUrl)
            .delete("/" + id + "")
            .end((err, res) => {
                done()
            })
    })
})
