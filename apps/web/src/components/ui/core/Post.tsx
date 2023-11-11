"use client";
import React, {useState} from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import {PostQuery} from "@/queries/allPosts";

interface PostProps {
  post: PostQuery
}

export default function Post({post}: PostProps) {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  return (
  <Card className="max-w-[340px]">
    <CardHeader className="justify-between">
      <div className="flex gap-5">
        <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
        <div className="flex flex-col gap-1 items-start justify-center">
          <h4 className="text-small font-semibold leading-none text-default-600">{post.user.name}</h4>
          <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
        </div>
      </div>
      <Button
        className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
        color="primary"
        radius="full"
        size="sm"
        variant={isFollowed ? "bordered" : "solid"}
        onPress={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </CardHeader>
    <CardBody className="px-2 py-2 text-small text-default-400">
      <p>{post.content}</p>
      <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      <span className="pt-2 cursor-crosshair">
        Показать коменты
      </span>
    </CardBody>
    <CardFooter className="gap-3">
      <div className="flex gap-1">
        <p className="font-semibold text-default-400 text-small">4</p>
        <p className=" text-default-400 text-small">s</p>
      </div>
      <div className="flex gap-1">
        <p className="font-semibold text-default-400 text-small">4</p>
        <p className=" text-default-400 text-small">Comment</p>
      </div>
    </CardFooter>
  </Card>
  );
}
