interface IStrategy {
  calculate(a: number, b: number): number
}

class AddStrategy implements IStrategy {
  calculate(a: number, b: number): number {
    return a + b
  }
}

class SubtractStrategy implements IStrategy {
  calculate(a: number, b: number): number {
    return a - b
  }
}

class Context {
  private strategy: IStrategy

  constructor(strategy: IStrategy) {
    this.strategy = strategy
  }

  public setStrategy(strategy: IStrategy) {
    this.strategy = strategy
  }

  public calculate(a: number, b: number) {
    return this.strategy.calculate(a, b)
  }
}

const context = new Context(new AddStrategy())
console.log(context.calculate(1, 2)) // 3
context.setStrategy(new SubtractStrategy())
console.log(context.calculate(1, 2)) // -1

context.setStrategy(new SubtractStrategy())
console.log(context.calculate(1, 2)) // -1
