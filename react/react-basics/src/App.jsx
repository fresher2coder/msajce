import UserDetails from "./apiFetch/UserDetails";
import "./App.css";
import MainLayout from "./components/MainLayout";
import Employee from "./mapFilterReduce/Employee";
import Parent from "./props/propsMethod/Parent";
import UserLayout from "./props/UserLayout";
import UserProfile from "./props/UserProfile";
import Counter from "./state/Counter";
import FeatureToggle from "./state/FeatureToggle";
import MouseTrackerApp from "./useEffect/MouseTrackerApp";

function App() {
  return (
    <>
      {/* layout  */}
      {/* <MainLayout /> */}

      {/* props  */}
      {/* <section className="user-profiles">
        <UserProfile
          name="Dineshkumar"
          age={34}
          isMarried={true}
          location="Chennai"
          occupation="Technical Trainer"
        />
        <UserProfile
          name="Divya Dineshkumar"
          age="31"
          location="Chennai"
          occupation="Molucular Biologist"
        />
        <UserProfile
          name="Darwin Divya Dinesh"
          age="3"
          location="Chennai"
          occupation="Toddler"
        />
      </section> */}

      {/* props as children  */}
      {/* <section className="user-layouts">
        <UserLayout userName="Dineshkumar">
          <h2>User Dashboard</h2>
          <p>Welcome to the user dashboard</p>
        </UserLayout>
        <UserLayout userName="Dineshkumar">
          <h2>User Setting</h2>
          <p>Welcome to the user setting</p>
        </UserLayout>
      </section> */}

      {/* probs as method  child -> parent */}
      {/* <Parent /> */}

      {/* state  */}
      {/* <section className="counters">
        <Counter initialValue={1} incrementValue={1} />
        <Counter initialValue={10} incrementValue={10} />
        <Counter initialValue={100} incrementValue={100} />
      </section> */}

      {/* <FeatureToggle /> */}

      {/* map filter reduce - list rendering */}
      {/* <Employee /> */}

      {/* useEffect  */}
      {/* <MouseTrackerApp /> */}

      {/* apiFetch  */}
      <UserDetails />
    </>
  );
}

export default App;
