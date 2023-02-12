import nodeLogo from "../assets/node.svg";
import { useState } from "react";
import "../App.scss";
import Draggable from "react-draggable";
import SignUp from "./SignUp";
import CreateClass from "./CreateClass";
import Drag from "./Drag";


import { useEffect } from "react";

import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import {
  SessionContextProvider,
  Session,
  useSession,
} from "@supabase/auth-helpers-react";

const supabaseUrl = "https://osibsvbjsuvgoqyftyxr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zaWJzdmJqc3V2Z29xeWZ0eXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxMzY5OTMsImV4cCI6MTk5MTcxMjk5M30.I-itePTB7VtcFe-cjwbh0jZNKunDWXjvJPUCQI-NHhc";
const supabase = createClient(supabaseUrl, supabaseKey);

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  const [lock, setLock] = useState();
  let session = useSession();
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <div className="App">
        <Drag></Drag>
      </div>
    </SessionContextProvider>
  );
}

export default App;
