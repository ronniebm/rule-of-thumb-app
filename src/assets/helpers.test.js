import { capitalizeString, cutString } from './helpers'; 

// Testing helper functions.
// -------------------------


// test #01
// ------------
test('Testing "capitalizeString()" helper function:', () => {
    expect(
        capitalizeString("name")
    ).toBe("Name");
})


// test #02
// ------------
test('Testing "cutString()" helper function:', () => {
    expect(
        cutString("hello world", 5)
    ).toBe("hello...");
})
