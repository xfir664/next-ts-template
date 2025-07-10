"use client";
import MyBtnLink from "@/app/components/UI/MyBtnLink/MyBtnLink";




export default function Home() {
  return (
    <main className="main">
      <div className="flex flex-col gap-4">
        <MyBtnLink UIType="btn" UIVariant="base">
          btn-base
        </MyBtnLink>
        <MyBtnLink UIType="btn" UIVariant="primary">
          btn-primary
        </MyBtnLink>
        <MyBtnLink UIType="btn" UIVariant="secondary">
          btn-secondary
        </MyBtnLink>
        <MyBtnLink UIType="btn" UIVariant="base" isActive={true}>
          btn-base
        </MyBtnLink>
        <MyBtnLink UIType="btn" UIVariant="primary" isActive={true}>
          btn-primary
        </MyBtnLink>
        <MyBtnLink UIType="btn" UIVariant="secondary" isActive={true}>
          btn-secondary
        </MyBtnLink>
        <MyBtnLink UIType="link" UIVariant="base">
          link-base
        </MyBtnLink>
        <MyBtnLink UIType="link" UIVariant="primary">
          link-primary
        </MyBtnLink>
        <MyBtnLink UIType="link" UIVariant="secondary">
          link-secondary
        </MyBtnLink>
        <MyBtnLink UIType="navlink" UIVariant="base">
          navlink-base
        </MyBtnLink>
        <MyBtnLink UIType="navlink" UIVariant="primary">
          navlink-primary
        </MyBtnLink>
        <MyBtnLink UIType="navlink" UIVariant="secondary">
          navlink-secondary
        </MyBtnLink>
      </div>
      <div className="flex flex-col gap-4">

      </div>
    </main>
  );
}
