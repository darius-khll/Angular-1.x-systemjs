import { module, bootstrap } from 'angular';
import * as main from './service';

var app = module('app', []);

class Ctrl {
    public async $onInit() {
        main.Test.f1();
    }
    public test: string = "Ali";
}

app.controller('ctrl', Ctrl);
