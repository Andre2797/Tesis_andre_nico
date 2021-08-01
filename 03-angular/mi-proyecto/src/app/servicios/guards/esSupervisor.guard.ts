import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../aut+/auth.service";

@Injectable()

export class EsSupervisorGuard implements CanActivate{

  constructor(
    private readonly _authService:AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const esSupervisor=this._authService.roles.some(
      (rol)=>{
        return rol === 'Supervisor'
      }
    )
    return esSupervisor

  }

}
