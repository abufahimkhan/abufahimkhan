import { NavBarLarge } from "./NavBarLarge";
import { NavBarMobile } from "./NavBarMobile";


export default function Navigation() {
  return (
    <>
      {/* Large screen navigation */}
      <div className="hidden lg:block">
        <NavBarLarge />
      </div>

      {/* Mobile screen navigation */}
      <div className="lg:hidden">
        <NavBarMobile />
      </div>
    </>
  );
}
