package se.mosverkstad.mosjava.gaPilot.generalHelpers;

public class MultipleIndex {
	private int index1 = 0;
	private int index2 = 0;
	public MultipleIndex(int min, int max) {
		while (index1 == index2) {
			int p1 = RandomGenerator.generateInt(min, max);
			int p2 = RandomGenerator.generateInt(min, max);
			index1 = p1 < p2? p1 : p2;
			index2 = p1 > p2? p1 : p2;
		}
	}
	public int getIndex1() { return index1; }
	public int getIndex2() { return index2; }
}
