"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function DeleteAccount() {
  const [value, setValue] = React.useState("");

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="border-none bg-red-600/50 hover:bg-red-600"
      >
        <Button variant="outline">Delete my account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader className="md:mb-4">
          <DialogTitle className="md:mb-4">
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription className="font-medium">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our database.
          </DialogDescription>
        </DialogHeader>
        <div>
          Type <strong>delete my account</strong> to continue:
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              type="text"
              className=""
              id="link"
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
              placeholder="Type delete my account"
            />
          </div>
        </div>
        <DialogFooter className="mt-3 flex items-center justify-between">
          <Button
            type="submit"
            variant="destructive"
            disabled={value !== "delete my account"}
            className="w-20 bg-red-600/50 hover:bg-red-600"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

//  <DialogClose asChild>
//    <Button type="button" className="w-20" variant="secondary">
//      Close
//    </Button>
//  </DialogClose>;
