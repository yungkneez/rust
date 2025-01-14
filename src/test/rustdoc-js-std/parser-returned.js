const QUERY = ['-> F<P>', '-> P', '->,a', 'aaaaa->a'];

const PARSED = [
    {
        elems: [],
        foundElems: 1,
        original: "-> F<P>",
        returned: [{
            name: "f",
            fullPath: ["f"],
            pathWithoutLast: [],
            pathLast: "f",
            generics: [
                {
                    name: "p",
                    fullPath: ["p"],
                    pathWithoutLast: [],
                    pathLast: "p",
                    generics: [],
                },
            ],
        }],
        typeFilter: -1,
        userQuery: "-> f<p>",
        error: null,
    },
    {
        elems: [],
        foundElems: 1,
        original: "-> P",
        returned: [{
            name: "p",
            fullPath: ["p"],
            pathWithoutLast: [],
            pathLast: "p",
            generics: [],
        }],
        typeFilter: -1,
        userQuery: "-> p",
        error: null,
    },
    {
        elems: [],
        foundElems: 1,
        original: "->,a",
        returned: [{
            name: "a",
            fullPath: ["a"],
            pathWithoutLast: [],
            pathLast: "a",
            generics: [],
        }],
        typeFilter: -1,
        userQuery: "->,a",
        error: null,
    },
    {
        elems: [{
            name: "aaaaa",
            fullPath: ["aaaaa"],
            pathWithoutLast: [],
            pathLast: "aaaaa",
            generics: [],
        }],
        foundElems: 2,
        original: "aaaaa->a",
        returned: [{
            name: "a",
            fullPath: ["a"],
            pathWithoutLast: [],
            pathLast: "a",
            generics: [],
        }],
        typeFilter: -1,
        userQuery: "aaaaa->a",
        error: null,
    },
];
