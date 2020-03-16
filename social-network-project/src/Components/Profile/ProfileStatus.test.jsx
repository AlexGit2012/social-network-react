import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", ()=>{
    test("test status in state correct got from props", ()=>{
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    });

    test("after creation 'span' should be displayed", ()=>{
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const root = component.root;
        let span = root.findByType("span");
        expect(span.length).toBe(1);
    });

    test("after creation 'span' should contain correct status", ()=>{
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const root = component.root;
        let span = root.findByType("span");
        expect(span.length).toBe(1);
    });
});
