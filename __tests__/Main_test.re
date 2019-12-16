open Jest;
open JestDom;
open ReactTestingLibrary;
open Expect;

describe("Main", () => {
    test("should have hello world text", () =>
        <Main />
        |> render
        |> getByText(~matcher=`Str("Hello, World!!"))
        |> expect
        |> toBeVisible
    )
})
