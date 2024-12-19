import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, differenceInCalendarDays } from 'date-fns';
import { Post } from "#site/content";
import { zhCN } from "date-fns/locale"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}


export function formatDateOrDaysAgo(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();
  const daysDifference = differenceInCalendarDays(today, date);

  if (daysDifference < 0) {
    // 如果日期在未来，则直接返回日期
    return format(date, 'yyyy年MM月dd日');
  }

  if (daysDifference <= 7) {
    // 如果日期在7天以内（包括今天），显示几天前
    if (daysDifference === 0) {
      return '今天';
    }
    return `${daysDifference} 天前`;
  }

  // 如果日期超过7天，显示具体日期
  return format(date, 'yyyy年MM月dd日EEEE', { locale: zhCN });
}

export function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1
    return 0
  })
}
