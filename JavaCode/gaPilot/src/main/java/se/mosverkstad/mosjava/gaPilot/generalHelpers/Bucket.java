package se.mosverkstad.mosjava.gaPilot.generalHelpers;

import java.util.ArrayList;

public class Bucket<T> {
	private int size = 0;
	private int index = 0;
	private ArrayList<T> bucket = new ArrayList<T>();
	
	public Bucket(int size) {
		this.size = size;
	}
	
	public Bucket<T> add(T element) {
		if (this.bucket.size() < this.size) {
			this.bucket.add(element);
		} else {
			this.bucket.set(this.index, element);
			this.index = (this.index + 1) % this.size;
		}
		return this;
	}
	
	public ArrayList<T> get() {
		return this.bucket;
	}
	@Override
	public String toString() {
		return this.bucket.toString();
	}
}
