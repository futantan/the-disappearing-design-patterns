interface Observer {
  update(newBlog: string)
}

class ZhihuObserver implements Observer {
  update(newBlog) {
    console.log('publishing to zhihu...', newBlog)
  }
}

class JianshuObserver implements Observer {
  update(newBlog) {
    console.log('publishing to jianshu...', newBlog)
  }
}

interface Subject {
  registerObserver(o: Observer)
  removeObserver(o: Observer)
  notifyObservers(newBlog: string)
}

class BlogWriter implements Subject {
  private observers: Observer[] = []
  registerObserver(o: Observer) {
    this.observers.push(o)
  }
  removeObserver(o: Observer) {
    this.observers = this.observers.filter(v => v !== o)
  }
  notifyObservers(blog: string) {
    this.observers.forEach(o => {
      o.update(blog)
    })
  }
}

const subject: Subject = new BlogWriter()
const zhihu = new ZhihuObserver()
subject.registerObserver(zhihu)
subject.registerObserver(new JianshuObserver())
subject.notifyObservers('hello')
// publishing to zhihu... hello
// publishing to jianshu... hello
subject.removeObserver(zhihu)
subject.notifyObservers('world')
// publishing to jianshu... world
