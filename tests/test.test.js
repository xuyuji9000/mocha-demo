import expect from "expect";

describe("Array", function(){
    describe("#indexOf()", function(){
        it("should return -1 when the value is not present", function(){
            expect([1, 2, 3].indexOf(4)).toEqual(-1);
        })
    });
});

describe("expect", () => {
    describe("#toExist()", function(){
        it("something should pass", () => {
            expect("something").toExist();
        });
        it("true should pass", ()=>{
            expect(true).toExist();
        });
    })

    describe("#toNotExist()", function(){
        it("false will pass", () => {
            expect(false).toNotExist();
        });
        it("null will path", () => {
            expect(null).toNotExist();
        });
    });

    describe("#toBe()", function() {
        it("obejct should strict equal", () => {
            const t = {one:1,two:2,three:3};
            expect(t).toBe(t);
        });
    });

    describe("#toNotBe()", function() {
        it("obejct not strict equal", () => {
            expect({one:1,two:2,three:3}).toNotBe({one:1,two:2,three:3});
        });
    });

    describe("#toEqual()", function() {
        it("object should equal", () => {
            expect({one:1,two:2,three:3}).toEqual({one:1,two:2,three:3});
        });
    });

    describe("#toNotEqual()", function() {
        it("should detect not equal", () => {
            expect({one:2,two:2,three:3}).toNotEqual({one:1,two:2,three:3});
        });
    });


    describe("#toThrow()", function() {
        it("should detect error", () => {
            expect(function() {throw new Error("boom!")}).toThrow(/boom/);
        });
    });

    describe("#spy", () => {
        it("should work like object", () => {
            let video = {
                play: () => {},
                pause: () => {},
                rewind: () => {}
            };

            let spy = expect.spyOn(video, "play");

            video.play("some", "args");

            expect(spy.calls.length).toEqual(1);

            expect(spy.calls[0].context).toBe(video);

            expect(spy.calls[0].arguments).toEqual(["some", "args"]);

            expect(spy).toHaveBeenCalled();

            expect(spy).toHaveBeenCalledWith("some", "args");

            spy.restore();

            expect.restoreSpies();
        })


        
    });


});
