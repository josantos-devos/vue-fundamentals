
describe('Example Component', () => {

  test('Debe ser mayor a 10', () => {

    //Arrange (Arreglar)
    let value = 10

    //Act (Estimulo)
    value = value + 2

    //Assert (Afirmar)
    expect(value).toBeGreaterThan(10)

  })

})