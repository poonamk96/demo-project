var sum = require("../sum")
var expect = require("chai").expect
var expect = require("chai").should
var chaiHttp = require("chai-http")
var chai = require("chai")
var assert = require("assert")
chai.use(chaiHttp)
var adminUrl = "http://localhost:3000/Teacher"

describe("POST Data", function() {
    it("It should post data", (done) => {
        let teacher = {
            name: "ram",
            email: "ram@gmail.com",
            adress: "thane",
            salary: "20000"
        }

        chai.request(adminUrl)
            .post("/")
            .send(teacher)
            .end(function(err, res) {
                //expect(err).to.be.null
                //expect(res).to.have.status(200)
                console.log("data displayed", res.body)
                done()
            })
    })
})

describe("GET Data", () => {
    it("should get all teachers record", (done) => {
        chai.request(adminUrl)
            .get("/")
            .end((err, res) => {
                //expect(err).to.be.null
                //expect(res).to.have.status(200)
                //expect(res.body).to.be.an('array');
                console.log("data displayed", res.body)
                done()
            })
    })
})

describe("GET BY ID", () => {
    it("should get all teachers record", (done) => {
        let id = "5d80c549b6953d557762a7cc"

        chai.request(adminUrl)
            .get("/" + id + "")
            .end((err, res) => {
                //expect(err).to.be.null
                //expect(res.body).to.be.an('object');
                console.log("data displayed", res.body)
                done()
            })
    })
})
describe("PUT BY ID", () => {
    it("should get update teachers record by ID", (done) => {
        let id = "5d80c62940a2505682ccb6bc"

        chai.request(adminUrl)
            .put("/" + id + "")
            .send({ name: "abc" })
            .end((err, res) => {
                done()
            })
    })
})

describe("DELETE BY ID", () => {
    it("should get delete teachers record by ID", (done) => {
        let id = "5d80a62a57e1d83bf198251e"

        chai.request(adminUrl)
            .delete("/" + id + "")
            // .send({'name': 'john'})
            .end((err, res) => {
                //  console.log("data displayed",res.body)
                done()
            })
    })
})
