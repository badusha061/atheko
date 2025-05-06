"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // Correct import for app directory
import React, { useState } from "react";

export type Service = {
  name: string;
  image: string;
  description: string;
  banner: string;
  bulletPoints: string[];
};

export default function Services() {
  const router = useRouter();
  const services: Service[] = [
    {
      name: "LAUNDRY",
      image: "/services/icons/LAUNDRY.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "PREMIUM LAUNDRY CARE",
      image: "/services/icons/LAUNDRY_CARE.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "DRY CLEANING",
      image: "/services/icons/DRY_CLEAN.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "STEAM IRONING",
      image: "/services/icons/SRTEAM_IRONING.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "WASH & FOLD",
      image: "/services/icons/WASH_FOLD.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "DELICATE FABRIC HANDLING",
      image: "/services/icons/DELICATE_FABRIC_HANDLING.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "SHOE CLEANING & CARE",
      image: "/services/icons/SHOE_CLEANING_CARE.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "LINEN & HOME TEXTILE CLEANING",
      image: "/services/icons/LINEN_HOME_TEXTILE_CLEANING.jpg",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "EXPRESS DELIVERY OPTION",
      image: "/services/icons/FAST_DELIVERY.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "FABRIC COLORING",
      image: "/services/icons/FABRIC_COLORING.webp",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "CLOTH POLISHING",
      image: "/services/icons/CLOTH_POLISHING.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "FABRIC SHREDDING",
      image: "/services/icons/FABRIC_SHREDDING.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "LAUNDRY",
      image: "/services/icons/LAUNDRY.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "PREMIUM LAUNDRY CARE",
      image: "/services/icons/LAUNDRY_CARE.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "DRY CLEANING",
      image: "/services/icons/DRY_CLEAN.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "STEAM IRONING",
      image: "/services/icons/SRTEAM_IRONING.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "WASH & FOLD",
      image: "/services/icons/WASH_FOLD.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "DELICATE FABRIC HANDLING",
      image: "/services/icons/DELICATE_FABRIC_HANDLING.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "SHOE CLEANING & CARE",
      image: "/services/icons/SHOE_CLEANING_CARE.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "LINEN & HOME TEXTILE CLEANING",
      image: "/services/icons/LINEN_HOME_TEXTILE_CLEANING.jpg",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "EXPRESS DELIVERY OPTION",
      image: "/services/icons/FAST_DELIVERY.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "FABRIC COLORING",
      image: "/services/icons/FABRIC_COLORING.webp",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "CLOTH POLISHING",
      image: "/services/icons/CLOTH_POLISHING.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
    {
      name: "FABRIC SHREDDING",
      image: "/services/icons/FABRIC_SHREDDING.png",
      description:
        "Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids andbaby wear etc using a cleaning agent other than water.Send Message At laundrology, our experts follow the 5 step safest dry clean techniques, treating each garment individually. If you are searching for the best dry cleaner near you who will exceed your expectations with dry cleaning your favourite outfit, then your search ends here. Dry cleaning is the process of cleaning your designer wear, woolen blazers, silks, sarees with embroidery, stonework, quilts and blankets, mattresses and baby bedding, kids and baby wear etc using a cleaning agent other than water.",
      banner: "/services/banner/banner.avif",
      bulletPoints: [
        "Checking each garment for stain, analysing the type of stain and best case stain removal. This pre-spotting is done prior to cleaning.",
        "Dry cleaning with organic solvents based on the fabric and colour",
        "Sanitization to ensure your clothes are shielded from germs and are microbe free.",
        "Depending on the garment and your personal preference, starch, brightener etc are added",
        "Form finishing to iron the garments, removing creases and wrinkles safely. We at Laundrology also ensure that no unnecessary and unsightly crease lines are added.",
      ],
    },
  ];

  const [visibleServices, setVisibleServices] = useState(9);

  const handleViewMore = () => {
    setVisibleServices(services.length);
  };

  const handleServiceClick = async (service: Service): Promise<void> => {
    try {
      // Serialize the service object into a JSON string
      const serviceData = encodeURIComponent(JSON.stringify(service));

      // Create the path with the serialized service data
      const path = `/services/${encodeURIComponent(
        service.name
      )}?data=${serviceData}`;

      // Navigate to the new path
      await router.push(path);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <section className="h-full flex flex-col justify-start items-center">
      <div className="h-full w-full flex flex-col justify-start items-center px-6 md:px-20 mt-10 max-w-7xl">
        {/* Search bar */}
        <div className="w-full md:w-1/2 h-12 rounded-3xl border border-blue-600 transition-all duration-500 hover:shadow-lg">
          <input
            className="w-full h-full rounded-3xl px-5 text-sm md:text-base"
            type="text"
            placeholder="Search"
          />
        </div>

        <div
          className={`flex flex-row  ${
            visibleServices < services.length
              ? "justify-between"
              : "justify-center"
          } items-center w-full mt-10`}
        >
          <p className="text-xl md:text-3xl font-bold">Select Your Service</p>
          {visibleServices < services.length && (
            <button
              onClick={handleViewMore}
              className="text-blue-600 rounded-sm px-5 py-2 text-sm md:text-3xl font-bold hover:underline"
            >
              View All
            </button>
          )}
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-10">
          {services.slice(0, visibleServices).map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service)}
              className="flex flex-col justify-center items-center gap-3 md:gap-5 animate-fade-in"
            >
              <Image
                width={100}
                height={100}
                src={service.image}
                alt={service.name}
                className="transition-transform duration-300 hover:scale-110"
              />
              <p className="text-sm md:text-2xl font-bold text-center">
                {service.name}
              </p>
            </div>
          ))}
        </div>

        {/* Offers Section */}
        {visibleServices < services.length && (
          <div className="flex flex-col w-full gap-10 mt-20">
            <div className="flex flex-row justify-between items-center w-full">
              <p className="text-3xl md:text-5xl font-bold">
                LAUNCHING OFFERS!
              </p>
            </div>

            {/* Offer posters */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
              <Image
                src="/services/icons/offers.jpg"
                width={600}
                height={600}
                alt="offer poster"
                className="rounded-md transition-transform duration-300 hover:scale-105"
              />
              <Image
                src="/services/icons/offers.jpg"
                width={600}
                height={600}
                alt="offer poster"
                className="rounded-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
