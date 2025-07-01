"use client";
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import axios from 'axios';

function Page() {
  const [form, setForm] = useState("");

  async function handleSubmit() {
    try {
      const res = await axios.post("http://localhost:3000/api/content", { message: form });
      console.log(res.data);
    } catch (err) {
      console.error("Axios error:", err);
    }
  }

  return (
    <div>
      <Textarea
        className="bg-gray h-full border-1"
        placeholder="Enter your feedback"
        onChange={(e) => setForm(e.target.value)}
      />
      <Button className="w-full h-7 m-5" onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default Page;
