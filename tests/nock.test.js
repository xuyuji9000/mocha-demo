import axios from "axios";
import expect from "expect";
import nock from "nock";
import mlog from "mocha-logger";

describe("nock", function(){

    afterEach(function(){
        nock.restore();
    }) 

    beforeEach(function() {

    });

    it("should intercept url", function() {
        nock("http://api.postcodes.io")
            .get('/postcodes/')
            .reply(200, {
                "status": 200,
                "message": "This is a mocked response"
            });

        const instance = axios.create({baseURL: "http://api.postcodes.io"});
        return instance.get('/postcodes/')
            .then(function(res){
                expect(res.status).toEqual(200);
                expect(res.data.message).toEqual("This is a mocked response");
            });

    });
});
