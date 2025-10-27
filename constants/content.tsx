import { LucideProps, CircleCheckBig } from 'lucide-react';

export const NavLinks = [
  { name: 'হোম', href: '/' },
  { name: 'আমাদের সম্পর্কে', href: '#about' },
  { name: 'সেবা সমূহ', href: '#services' },
  { name: 'কিভাবে পোডাক্ট পাবে', href: '#product-process' },
  { name: 'যোগাযোগ', href: '#contact' },
];

export const ShortService = [
  [
    {
      title: 'বিশ্বস্ত এবং নির্ভরযোগ্য আমদানিকারক কোম্পানি',
      icon: (props: LucideProps) => (
        <CircleCheckBig {...props} />
      ),
    },
    {
      title: 'চীনের শীর্ষস্থানীয় বাজার থেকে সরাসরি আমদানি',
      icon: (props: LucideProps) => (
        <CircleCheckBig {...props} />
      ),
    },
    {
      title: 'সাশ্রয়ী মূল্য এবং দ্রুত ডেলিভারি',
      icon: (props: LucideProps) => (
        <CircleCheckBig {...props} />
      ),
    },
  ],
  [
    {
      title: 'সহজ এবং সুবিধাজনক অনলাইন অর্ডার প্রক্রিয়া',
      icon: (props: LucideProps) => (
        <CircleCheckBig {...props} />
      ),
    },
    {
      title: 'পেশাদার কাস্টমস ক্লিয়ারেন্স এবং শিপিং সেবা',
      icon: (props: LucideProps) => (
        <CircleCheckBig {...props} />
      ),
    },
    {
      title: 'গ্রাহক সন্তুষ্টি এবং সমর্থনে অগ্রণী',
      icon: (props: LucideProps) => (
        <CircleCheckBig {...props} />
      ),
    },
  ],
];
