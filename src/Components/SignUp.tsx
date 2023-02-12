import "../App.scss";

import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

const supabaseUrl = "https://osibsvbjsuvgoqyftyxr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zaWJzdmJqc3V2Z29xeWZ0eXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxMzY5OTMsImV4cCI6MTk5MTcxMjk5M30.I-itePTB7VtcFe-cjwbh0jZNKunDWXjvJPUCQI-NHhc";
const supabase = createClient(supabaseUrl, supabaseKey);

function SignUp() {
  let supabaseClient = useSupabaseClient();
  let session = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);
  return (
    <div>
      {session ? (
        ""
      ) : (
        <Auth
          redirectTo="localhost:3000/"
          appearance={{ theme: ThemeSupa }}
          supabaseClient={supabase}
          providers={["google"]}
          socialLayout="horizontal"
        />
      )}
      <div className="lock-ui"></div>
    </div>
  );
}

export default SignUp;
