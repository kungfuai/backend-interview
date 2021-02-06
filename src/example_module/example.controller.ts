import { Controller, Get } from '@nestjs/common';


@Controller('/exampleEndpoint1')
export class ExampleController {
  
  @Get('/')
  public exampleGet() {
    return "This is a get!"
  }
}
