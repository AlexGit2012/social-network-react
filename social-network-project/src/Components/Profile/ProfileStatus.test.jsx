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
        expect(span).not.toBeNull();
    });

    test("after creation 'input' shouldn't be displayed", ()=>{
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const root = component.root;

        expect(()=>{
            let input = root.findByType("input");
        }).toThrow();
    });

    test("after creation 'span' should contain correct status", ()=>{
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[1]).toBe("it-kamasutra.com");
    });

    test("input should be displayed in editMode", ()=>{
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("it-kamasutra.com");
    });

    test("callback should be called", ()=>{
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="it-kamasutra.com" updateUserStatus={mockCallBack}/>)
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});
