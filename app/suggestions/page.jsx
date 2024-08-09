"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Container from "@/components/Container";
import NavLayout from "@/components/NavLayout";

export default function SuggestionsPage({ params }) {
  const [description, setDescription] = useState("");
  const markdown = `A paragraph with *emphasis* and **strong importance**.
    > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

    * Lists
    * [ ] todo
    * [x] done

    A table:

    | a | b |
    | - | - |

    > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

    * Lists
    * [ ] todo
    * [x] done

    A table:

    | a | b |
    | - | - |

    > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

    * Lists
    * [ ] todo
    * [x] done

    A table:

    | a | b |
    | - | - |

    > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

    * Lists
    * [ ] todo
    * [x] done

    A table:

    | a | b |
    | - | - |
    `;

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    alert(description);
  }

  return (
    <NavLayout>
      <div className="flex items-center">
        <div className="h-full flex-[3] pb-20">
          <MarkdownRenderer markdown={markdown} />
        </div>

        <div className="fixed bottom-2 max-w-screen-md w-full left-[50%] -translate-x-[50%] flex items-center justify-center p-2">
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 w-full border border-gray-800 p-2 rounded-lg"
          >
            <Input
              className="flex-1 py-2"
              size="lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What else do you want to suggest?"
            />

            <Button>submit</Button>
          </form>
        </div>
      </div>
    </NavLayout>
  );
}
