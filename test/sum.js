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
    // it("It should post data", (done) => {
    //     let teacher = {
    //         name: "john",
    //         address: "dadar",
    //         email: "john@gmail.com",
    //         subject: "oops",
    //         salary: "35000"
    //     }

    //     chai.request(adminUrl)
    //         .post("/")
    //         .send(teacher)
    //         .end(function(err, res) {
    //             expect(err).to.be.null
    //             expect(res).to.have.status(200)
    //             console.log("POST Result", res.body)
    //             done()
    //         })
    // })
    it("It should return 500 error when missing any feild", (done) => {
        let teacher = {
            name: "john",
            address: "dadar",
            email: "john@gmail.com",
            subject: "oops"
        }

        chai.request(adminUrl)
            .post("/")
            .send(teacher)
            .end(function(err, res) {
                expect(err).to.be.null
                expect(res).to.have.status(500)
                done()
            })
    })
})

// describe("GET Data", () => {
//     it("It should get all teachers record", (done) => {
//         chai.request(adminUrl)
//             .get("/")
//             .end((err, res) => {
//                 expect(err).to.be.null
//                 expect(res).to.have.status(200)
//                 expect(res.body).to.be.an("array")
//                 console.log("GET Result", res.body)
//                 done()
//             })
//     })
// })

describe("GET BY ID", () => {
    //     it("It should get single teachers record", (done) => {
    //         let id = "5d75f0a9d50cfe2842dfaf03"

    //         chai.request(adminUrl)
    //             .get("/" + id + "")
    //             .end((err, res) => {
    //                 expect(err).to.be.null
    //                 expect(res.body).to.be.an("object")
    //                 console.log("GET By ID Result", res.body)
    //                 done()
    //             })
    //     })
    it("It should return 500 error", (done) => {
        let id = "98765"

        chai.request(adminUrl)
            .get("/" + id + "")
            .end((err, res) => {
                expect(res).to.have.status(500)
                expect(err).to.be.null
                done()
            })
    })
})
describe("PUT BY ID", () => {
    //     it("It should update teachers record by ID", (done) => {
    //         let id = "5d8309b64899933126b6b503"

    //         chai.request(adminUrl)
    //             .put("/" + id + "")
    //             .send({ address: "thane" })
    //             .end((err, res) => {
    //                 done()
    //             })
    //     })
    it("It should return 500 error", (done) => {
        let id = "753753"

        chai.request(adminUrl)
            .put("/" + id + "")
            .send({ address: "thane" })
            .end((err, res) => {
                expect(res).to.have.status(500)
                expect(err).to.be.null
                done()
            })
    })
})

describe("DELETE BY ID", () => {
    // it("It should delete teachers record by ID", (done) => {
    //     let id = "5d830a2359620631a65c49ed"

    //     chai.request(adminUrl)
    //         .delete("/" + id + "")
    //         .end((err, res) => {
    //             done()
    //         })
    // })
    it("It should return 500 error when id is wrong", (done) => {
        let id = "12345"

        chai.request(adminUrl)
            .delete("/" + id + "")
            .end((err, res) => {
                expect(res).to.have.status(500)
                expect(err).to.be.null
                done()
            })
    })
})
