test("Selecting checkbox", () => {
    const { getByLabelText} = render(<Checkbox />)
    const checkbox = getByLabelText(/not checked/)
}); 

