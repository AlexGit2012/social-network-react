import React from 'react';
import profileReducer, {addPostActionCreator} from "./profilePageReducer";

it('renders without crashing', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra-test")
    let state = {posts: [{id: 1, message: "HI JACK!"}, {id: 2, message: "How are u7"}, {id: 3, message: "I'am fine)"}]}
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe("it-kamasutra-test")
});
