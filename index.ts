//1. Type Alias
 
type UserId = number;
const id: UserId = 123;

//2. Type Assertion

const myValue: unknown = "Hello World!";
const lengthOfString: number = (myValue as string).length;

//3. ReturnType

function greet(): string {
    return "hello";
}
type Greeting = ReturnType<typeof greet>;

//4. Mapped Types

type Person = {
    name: string;
    age: number;
}
type ReadonlyPerson = Readonly<Person>;

//5. Enums

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}
const myColor: Color = Color.Red;

//6. Tuple Types

type Point = [number, number];
const coordinates: Point = [10, 20];

//7. Type Guards

function greeting(person: string | null): string {
    if(person !== null){
        return `Hello ${person}!`;
    }
    return `Hello Stranger!`;
}

//8. Utility Types
 
type PartialPerson = Partial<Person>;

//9. Indexed Access Types

type Age = Person['age'];
const myAge : Age = 25;

//10. Conditional Types
 
type IsString<T> = T extends string ? true : false;
type Result = IsString<'Hello'>;