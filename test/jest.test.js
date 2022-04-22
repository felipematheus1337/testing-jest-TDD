test('Devo conhecer as principais assertivas do jest',() => {
    let number = null;
   expect(number).toBeNull();
   number = 10;
   expect(number).not.toBeNull();
})


test('My Single test application', () => {
let texto = "Um cara legal";
expect(texto.charAt(0)).toBe('U');
texto = "wolverine"
expect(texto.length).toBe(9)
let numero = 10;
expect(numero).toBeGreaterThan(7);
expect(numero).toBeLessThan(11)
})


test('Devo saber trabalhar com objetos', () => {
const obj = {
    name:"John",
    mail:"john@mail.com"
};
expect(obj).toHaveProperty("name");
expect(obj).toHaveProperty("name","John");
expect(obj.mail).toBe("john@mail.com");
const obj2 = {
    name:"John",
    mail:"john@mail.com"
};
//Não funciona porque não é o mesmo objeto.
//expect(obj).toBe(obj2);
expect(obj).toEqual(obj2);

});
