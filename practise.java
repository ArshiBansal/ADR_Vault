import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {

        Set<List<Integer>> set = new HashSet<>();

        Arrays.sort(nums);

        int n = nums.length;

        for (int i = 0; i < n - 2; i++) {

            for (int j = i + 1; j < n - 1; j++) {

                for (int k = j + 1; k < n; k++) {

                    if (nums[i] + nums[j] + nums[k] == 0) {

                        set.add(Arrays.asList(
                            nums[i],
                            nums[j],
                            nums[k]
                        ));
                    }
                }
            }
        }

        return new ArrayList<>(set);
    }
}
