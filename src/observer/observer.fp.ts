type Observer = (newBlog: string) => void;

interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers(newBlog: string);
}

const zhihuObserver: Observer = newBlog => {
  console.log("publishing to zhihu...", newBlog);
};

const jianshuObserver: Observer = newBlog => {
  console.log("publishing to jianshu...", newBlog);
};

const createBlogWriter = (): Subject => {
  let observers: Observer[] = [];
  return {
    registerObserver: (o: Observer) => {
      observers.push(o);
    },
    removeObserver: (o: Observer) => {
      observers = observers.filter(v => v !== o);
    },
    notifyObservers(blog: string) {
      observers.forEach(o => o(blog));
    }
  };
};

const subject = createBlogWriter();
subject.registerObserver(zhihuObserver);
subject.registerObserver(jianshuObserver);
subject.notifyObservers("hello");
// publishing to zhihu... hello
// publishing to jianshu... hello
subject.removeObserver(zhihuObserver);
subject.notifyObservers("world");
// publishing to jianshu... world
